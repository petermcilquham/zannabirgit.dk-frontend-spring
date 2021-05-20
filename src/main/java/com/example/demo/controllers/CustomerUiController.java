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
    @GetMapping("/efterbehandling.html")
    public String getEfterBehandling(){
        return "customer-ui/efterbehandling";
    }
    @GetMapping("/erfaringer.html")
    public String getErfaringer(){
        return "customer-ui/erfaringer";
    }
    @GetMapping("/priser.html")
    public String getPriser(){
        return "customer-ui/priser";
    }
    @GetMapping("/kontakt.html")
    public String getKontakt(){
        return "customer-ui/kontakt";
    }
    @GetMapping("/onlinebooking.html")
    public String getBooking(){
        return "customer-ui/onlinebooking";
    }
    @GetMapping("/zoneterapi.html")
    public String getZoneterapi(){
        return "customer-ui/zoneterapi";
    }
    @GetMapping("/healing.html")
    public String getHealing(){
        return "customer-ui/healing";
    }
    @GetMapping("/accessbars.html")
    public String getAccessBars(){
        return "customer-ui/accessbars";
    }
}
