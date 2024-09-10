package com.example.cheko.controller;

import com.example.cheko.dto.MenuItemDto;
import com.example.cheko.model.MenuItem;
import com.example.cheko.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/menu-items")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @GetMapping
    public MenuItemDto getAllMenuItems(@RequestParam(required = false) String searchTerm,
                                       @RequestParam(required = false) List<String> category) {
        return menuItemService.getAllMenuItems(searchTerm, category);
    }

}