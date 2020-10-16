package web.lab4.exception;

public class DataNotValidException extends RuntimeException {
    public DataNotValidException() {
        super("data is not valid");
    }
}
