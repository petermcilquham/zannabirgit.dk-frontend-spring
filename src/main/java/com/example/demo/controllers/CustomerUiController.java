package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CustomerUiController {

    // customer ui
    @GetMapping("/")
    public String getIndex(){
        return "customer-ui/index";
    }
    @GetMapping("/efterbehandling")
    public String getEfterBehandling(){
        return "customer-ui/efterbehandling";
    }
    @GetMapping("/erfaringer")
    public String getErfaringer(){
        return "customer-ui/erfaringer";
    }
    @GetMapping("/priser")
    public String getPriser(){
        return "customer-ui/priser";
    }
    @GetMapping("/kontakt")
    public String getKontakt(){
        return "customer-ui/kontakt";
    }
    @GetMapping("/onlinebooking")
    public String getBooking(){
        return "customer-ui/onlinebooking";
    }
    @GetMapping("/zoneterapi")
    public String getZoneterapi(){
        return "customer-ui/zoneterapi";
    }
    @GetMapping("/healing")
    public String getHealing(){
        return "customer-ui/healing";
    }
    @GetMapping("/accessbars")
    public String getAccessBars(){
        return "customer-ui/accessbars";
    }
    @GetMapping("/products")
    public String getProducts() {
        return "customer-ui/products";
    }
}
