package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OwnerUiController {

    @GetMapping("/calendar")
    public String getIndex(){
        return "owner-ui/calendar";
    }
}
