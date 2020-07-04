package com.rest.todo.service;

import com.rest.todo.model.ToDo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoService {
  private static List<ToDo> todos = new ArrayList<>();
  private static int toDoCount = 3;

  static {
    todos.add(new ToDo(0, "in28minutes", "this is todo 1", new Date(), false));
    todos.add(new ToDo(1, "in28minutes", "this is todo 2", new Date(), true));
    todos.add(new ToDo(2, "in28minutes", "this is todo 3", new Date(), false));
  }


  public ToDo addToDo(String user, String description, Date date, boolean isDone) {
    ToDo toDo = new ToDo(++toDoCount, user, description, date, isDone);
    todos.add(toDo);
    return toDo;
  }


  public List<ToDo> findAll(String username) {
    List<ToDo> filterTodo = new ArrayList<ToDo>();
    for (ToDo toDo : todos) {
      if (toDo.getUser().equals(username)) {
        filterTodo.add(toDo);
      }
    }
    return filterTodo;
  }

  public ToDo updateTodo(ToDo toDo) {
    todos.remove(toDo);
    todos.add(toDo);
    return toDo;
  }


  public ToDo deleteById(int id) {
    ToDo toDo = findById(id);
    if (toDo == null) {
      return null;
    }
    if (todos.remove(toDo)) {
      return toDo;
    }
    return null;
  }

  public ToDo findById(int id) {
    for (ToDo toDo : todos) {
      if (toDo.getId() == id) {
        return toDo;
      }
    }
    return null;
  }


}

