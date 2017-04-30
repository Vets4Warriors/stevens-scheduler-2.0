/**
 * Created by austin on 4/27/17.
 */
class Semester {
  constructor(term, numMeetings, numReqs, courses) {
    this.term = term;
    this.numMeetings = numMeetings;
    this.numReqs = numReqs;
    this.courses = [];
    for (const courseData of courses) {
      this.courses.push(new Course(courseData));
    }
  }
}