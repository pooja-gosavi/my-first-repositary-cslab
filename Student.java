package com.info.module;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "studentdemo")
public class Student {
    @Id
    private int id;
    private String name;
    private String city;

    public Student(int id,String name,String city){
        super();
        this.id=id;
        this.name=name;
        this.city=city;
    }
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setId(int id) {
        this.id = id;
    }


}
