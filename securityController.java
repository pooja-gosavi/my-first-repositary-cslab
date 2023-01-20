package com.example.springdemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class securityController {

    @GetMapping("/")
    public String show1(){

        return ("<h1> hello welcome to GPT karwar</h1>");
    }

    @GetMapping("/user")
    public String show2(){
        return ("<h1> hello world to user page </h1>");
    }

    @GetMapping("/admin")
    public String show3(){
        return ("<h1> hello world to admin page </h1>");

    }

}
