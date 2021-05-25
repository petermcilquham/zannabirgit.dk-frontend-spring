package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OwnerUiController {

//    @GetMapping("/login")
//    public String getLogin(){
//        return "owner-ui/login";
//    }

    @GetMapping("/calendar")
    public String getCalendar(){
        return "owner-ui/calendar";
    }

    @GetMapping("/editProducts")
    public String editProducts() {
        return "owner-ui/editProducts";
    }
}
