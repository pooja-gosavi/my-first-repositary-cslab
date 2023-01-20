package com.info.service;

import com.info.module.Student;
import com.info.repository.Myrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Myservice {
    @Autowired
    private Myrepository myRepository;

    public Student addStudent(Student student){
        return myRepository.save(student);
    }
    public List<Student> getStudent(){
        return myRepository.findAll();
    }

    public Student updateStudent(Student student){
        Student std=myRepository.findById(student.getId()).get();
        std.setId(student.getId());
        std.setName(student.getName());
        std.setCity(student.getCity());
        return  myRepository.save(std);

    }
    public String deleteStudent(int id){
        myRepository.deleteById(id);
        return "Student has been deleted";
    }
}
