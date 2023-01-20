package com.info.repository;

import com.info.module.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Myrepository  extends MongoRepository<Student,Integer> {
}
