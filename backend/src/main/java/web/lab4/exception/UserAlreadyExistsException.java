package web.lab4.exception;

public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException() {
        super("user with this login already exists");
    }
}
