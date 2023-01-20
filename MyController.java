package com.info.controller;

import com.info.module.Student;
import com.info.service.Myservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MyController {
    @Autowired
    private Myservice myservice;

    @GetMapping
    public List<Student> getStudent(){
        return myservice.getStudent();
    }
  @PostMapping
  public Student addStudents (@RequestBody Student student) {
        return myservice.addStudent(student);
  }

    @PutMapping
    public Student updateStudents(@RequestBody Student student){
        return  myservice.updateStudent(student);
    }
    @DeleteMapping("{id}")
    public String deleteStudents(@PathVariable int id){
        return myservice.deleteStudent(id);
    }
}
