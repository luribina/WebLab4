package web.lab4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;
import web.lab4.model.Data;
import web.lab4.model.User;

import java.util.List;

@Transactional(readOnly = true)
public interface IDataRepository extends JpaRepository<Data, Long> {
    List<Data> findByUser(User user);

    void removeAllByUser(User user);
}
