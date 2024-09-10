package com.example.cheko.specification;

import com.example.cheko.model.MenuItem;
import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class MenuItemSpecification {
    public static Specification<MenuItem> searchAndFilter(String searchTerm, List<String> categories) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (searchTerm != null && !searchTerm.isEmpty()) {
                String lowerSearchTerm = searchTerm.toLowerCase();
                Predicate namePredicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%" + lowerSearchTerm + "%");
                Predicate descriptionPredicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("description")), "%" + lowerSearchTerm + "%");
                predicates.add(criteriaBuilder.or(namePredicate, descriptionPredicate));
            }

            if (categories != null && !categories.isEmpty()) {
                List<String> lowerCategories = categories.stream()
                        .map(String::toLowerCase)
                        .collect(Collectors.toList());
                predicates.add(criteriaBuilder.lower(root.get("category")).in(lowerCategories));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}