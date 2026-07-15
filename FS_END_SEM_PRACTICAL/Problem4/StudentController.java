package Problem4;

// @RestController
// @RequestMapping("/api")
public class StudentController {

  // @GetMapping("/students")
  public ResponseEntity<?> getAllStudent() {
    StudentModel student1 = new StudentModel("101", "Raj", "BE");
    StudentModel student2 = new StudentModel("102", "Rahul", "BE");
    StudentModel student3 = new StudentModel("103", "Abhay", "BE");
    StudentModel student4 = new StudentModel("104", "Nilam", "BE");
    StudentModel student5 = new StudentModel("105", "Kirti", "BE");

    StudentModel[] students = {
      student1, student2, student3, student4, student5
    };

    return ResponseEntity<>(students, HttpStatus.Ok);
  }
}
