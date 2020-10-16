package web.lab4.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class DataNotValidAdvice {
    @ResponseBody
    @ExceptionHandler(DataNotValidException.class)
    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    String dataNotValidHandler(DataNotValidException ex) {
        return ex.getMessage();
    }
}
