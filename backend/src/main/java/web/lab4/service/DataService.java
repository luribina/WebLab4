package web.lab4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.lab4.exception.DataNotValidException;
import web.lab4.model.Data;
import web.lab4.model.User;
import web.lab4.repository.IDataRepository;

import java.util.List;

@Service
public class DataService implements IDataService {
    private final IDataRepository dataRepository;

    @Autowired
    public DataService(IDataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    public List<Data> getUserData(User user) {
        return dataRepository.findByUser(user);
    }

    public Data saveUserData(Data data) {
        return dataRepository.save(data);
    }

    public void deleteUserData(User user) {
        dataRepository.deleteAllByUser(user);
    }
}
