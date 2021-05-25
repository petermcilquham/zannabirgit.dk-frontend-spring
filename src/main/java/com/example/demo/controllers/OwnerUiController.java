package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OwnerUiController {

    @GetMapping("/login.html")
    public String getLogin(){
        return "owner-ui/login";
    }

    @GetMapping("/main.html")
    public String getMain(){
        return "owner-ui/main";
    }

    @GetMapping("/calendar.html")
    public String getCalendar(){
        return "owner-ui/calendar";
    }

    @GetMapping("/edit/products.html")
    public String editProducts() {
        return "owner-ui/editProducts";
    }


}
