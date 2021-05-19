package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
    //  services
    @GetMapping("/zoneterapi.html")
    public String getZoneterapi(){
        return "services/zoneterapi";
    }
    @GetMapping("/healing.html")
    public String getHealing(){
        return "services/healing";
    }
    @GetMapping("/accessbars.html")
    public String getAccessBars(){
        return "services/accessbars";
    }



    //  fragments
    //  disse controllers skal være her for at fragments virker men de bruges ikke aktivt
    @RequestMapping("/fragments/images.html")
    public String getImg(){
        return "fragments/images";
    }
    @RequestMapping("/fragments/menu.html")
    public String getMenu(){
        return "fragments/menu";
    }
    @RequestMapping("/fragments/footer.html")
    public String getFooter(){
        return "fragments/footer";
    }
}
