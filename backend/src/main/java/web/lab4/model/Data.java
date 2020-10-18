package web.lab4.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "data")
public class Data {
    @Id
    @GeneratedValue
    private Long id;
    private Double x;
    private Double y;
    private Double r;
    private Boolean result;

    @ManyToOne
    private User user;

    public Data() {
    }

    public Data(Double x, Double y, Double r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = check();
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public Boolean getResult() {
        return result;
    }

    public void setResult(Boolean result) {
        this.result = result;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean validate() {
        return (x != null && y != null && r != null && x > -5 && x < 3 && y >= -5 && y < 5 && r > 0 && r < 3);
    }

    public boolean check() {
        if (validate()) {
            return (x <= 0 && y >= 0 && y <= (x + r / 2) ||
                    x >= 0 && y <= 0 && y >= -r / 2 && x <= r ||
                    x <= 0 && y <= 0 && x * x + y * y <= r * r);
        }
        return false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Data data = (Data) o;
        return Objects.equals(id, data.id) &&
                Objects.equals(x, data.x) &&
                Objects.equals(y, data.y) &&
                Objects.equals(r, data.r) &&
                Objects.equals(result, data.result) &&
                Objects.equals(user, data.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, x, y, r, result, user);
    }
}

