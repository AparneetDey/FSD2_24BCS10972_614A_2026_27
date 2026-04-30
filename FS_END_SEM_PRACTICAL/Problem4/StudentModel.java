package Problem4;

// @Entity
// @Table("Student")
public class StudentModel {

  // @id
  private String uid;
  private String name;
  private String course;


  public StudentModel(String uid, String name, String course) {
    this.uid = uid;
    this.name = name;
    this.course = course;
  }

  public String getUID() {
    return this.uid;
  }
  public String getName() {
    return this.name;
  }
  public String getCourse() {
    return this.course;
  }
  
}