import Parse from "parse";

//checking if env is browser
if (typeof window !== "undefined") {
  Parse.initialize("DSeeLRkSLomcRNsKqT7nbnggDWUSscSu6XtIjI6K","vS41FA3Z1dxY7zJZ0OU4UqsowoLY497Q5TOWkhJo");
  Parse.serverURL = 'https://parseapi.back4app.com/';
}

export default Parse;