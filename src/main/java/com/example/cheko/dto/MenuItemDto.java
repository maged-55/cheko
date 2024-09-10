package com.example.cheko.dto;

import com.example.cheko.model.MenuItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuItemDto {
    private List<MenuItem> items;
    private Map<String, Long> categoryCounts;
}