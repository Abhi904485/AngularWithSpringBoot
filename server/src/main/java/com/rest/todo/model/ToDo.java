package com.rest.todo.model;
import java.util.Date;

public class ToDo {

  private int id;
  private String user;
  private String description;
  private Date targetDate;
  private boolean todoDone;

  public ToDo() {
    super();
  }

  public ToDo(int id, String user, String description, Date targetDate, boolean done) {
    super();
    this.id = id;
    this.user = user;
    this.description = description;
    this.targetDate = targetDate;
    this.todoDone = done;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUser() {
    return user;
  }

  public void setUser(String user) {
    this.user = user;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getTargetDate() {
    return targetDate;
  }

  public void setTargetDate(Date targetDate) {
    this.targetDate = targetDate;
  }

  public boolean isTodoDone() {
    return todoDone;
  }

  public void setTodoDone(boolean todoDone) {
    this.todoDone = todoDone;
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + id;
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == null) return false;
    if (!(obj instanceof ToDo))
      return false;
    if (obj == this)
      return true;
    return this.getId() == ((ToDo) obj).getId();
  }


  @Override
  public String toString() {
    return "ToDo{" +
      "id=" + id +
      ", user='" + user + '\'' +
      ", description='" + description + '\'' +
      ", targetDate=" + targetDate +
      ", isDone=" + todoDone +
      '}';
  }
}
