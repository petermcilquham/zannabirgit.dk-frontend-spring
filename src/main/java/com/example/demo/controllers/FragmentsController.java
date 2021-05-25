package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FragmentsController {

    //  fragments
    //  disse controllers skal være her for at fragments virker men de bruges ikke aktivt
    @GetMapping("/fragments/images.html")
    public String getImg(){
        return "fragments/images";
    }
    @GetMapping("/fragments/menu.html")
    public String getMenu(){
        return "fragments/menu";
    }
    @GetMapping("/fragments/footer.html")
    public String getFooter(){
        return "fragments/footer";
    }
    @GetMapping("/fragments/ownerMenu.html")
    public String getOwnerMenu(){
        return "fragments/ownerMenu";
    }
}
