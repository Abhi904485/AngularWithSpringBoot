package com.rest.todo.controller;

import com.rest.todo.model.SampleResponse;
import com.rest.todo.model.ToDo;
import com.rest.todo.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ToDoController {

  @Autowired
  ToDoService toDoService;

  @PostMapping(value = "/users/{username}/todos/")
  @ResponseStatus(value = HttpStatus.ACCEPTED)
  public ToDo addTodo(@RequestBody ToDo toDo, @PathVariable String username) {
    return toDoService.addToDo(username, toDo.getDescription(), toDo.getTargetDate(), toDo.isTodoDone());
  }


  @DeleteMapping(value = "/users/{username}/todos/{id}")
  @ResponseStatus(value = HttpStatus.ACCEPTED)
  public ToDo deleteTodo(@PathVariable String username, @PathVariable int id) {
    ToDo toDo = toDoService.deleteById(id);
    if (toDo != null) {
      return toDo;
    }
    return new ToDo();
  }

  @GetMapping(value = "/users/{username}/todos/")
  @ResponseStatus(value = HttpStatus.ACCEPTED)
  public List<ToDo> getAllTodos(@PathVariable String username) {
    return toDoService.findAll(username);
  }


  @GetMapping(value = "/users/{username}/todos/{id}")
  @ResponseStatus(value = HttpStatus.ACCEPTED)
  public ToDo getOneTodo(@PathVariable String username, @PathVariable int id) {
    return toDoService.findById(id);
  }

  @PutMapping(value = "/users/{username}/todos/{id}")
  @ResponseStatus(value = HttpStatus.ACCEPTED)
  public ToDo updateTodo(@PathVariable String username, @PathVariable String id, @RequestBody ToDo toDo) {
    return toDoService.updateTodo(toDo);
  }

  @GetMapping("/users/hello")
  @ResponseStatus(value = HttpStatus.ACCEPTED)
  public SampleResponse hello(){
    RestTemplate restTemplate = new RestTemplate();
    return restTemplate.getForObject("http://192.168.112.2:8083/sample", SampleResponse.class);
  }



}



