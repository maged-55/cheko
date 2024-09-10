package com.example.cheko.service;

import com.example.cheko.dto.MenuItemDto;
import com.example.cheko.model.MenuItem;
import com.example.cheko.repository.MenuItemRepository;
import com.example.cheko.specification.MenuItemSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository menuItemRepository;

    public MenuItemDto getAllMenuItems(String searchTerm, List<String> categories) {
        List<MenuItem> filteredItems = menuItemRepository.findAll(MenuItemSpecification.searchAndFilter(searchTerm, categories));
        Map<String, Long> categoryCounts = filteredItems.stream()
                .collect(Collectors.groupingBy(MenuItem::getCategory, Collectors.counting()));
        return new MenuItemDto(filteredItems, categoryCounts);
    }

}