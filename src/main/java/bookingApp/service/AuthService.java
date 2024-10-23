package bookingApp.service;

import bookingApp.model.User;
import bookingApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;


    public User login(String email, String password) {
        System.out.println("email: " + email);
        System.out.println("password: " + password);

        if (userExist(email)){
            User user = userRepository.findByEmail(email);
            if(validPassword(user, password)){
                System.out.println("dobat juzerrr ej");
                System.out.println(user.getProfilePic());
                return user;
            }
        }
        return null;
    }

    boolean userExist(String email){
        if(userRepository.findByEmail(email) != null){
            return true;
        }
        return false;
    }

    boolean validPassword(User user, String password){
        if(user.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}

