package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OwnerUiController {

    @GetMapping("/login")
    public String getLogin(){
        return "owner-ui/login";
    }

    @GetMapping("/main")
    public String getMain(){
        return "owner-ui/main";
    }

    @GetMapping("/calendar")
    public String getCalendar(){
        return "owner-ui/calendar";
    }

    @GetMapping("/edit/products")
    public String editProducts() {
        return "owner-ui/editProducts";
    }
}
