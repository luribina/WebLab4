package web.lab4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.lab4.model.User;

public interface IUserRepository extends JpaRepository<User, Long> {
    User findByUsername(String userName);
}
