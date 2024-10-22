package bookingApp.controller;

import bookingApp.model.User;
import bookingApp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/api/auth/login")
    public ResponseEntity<User> login(@RequestBody User loginUser) {
        System.out.println(" srce moje lepooo!!! ");

        User user = authService.login(loginUser.getEmail(), loginUser.getPassword());
        return ResponseEntity.ok(user);
    }
}


