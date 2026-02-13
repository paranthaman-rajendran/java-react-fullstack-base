package com.app.health;

import com.app.common.dto.ApiResponse;
import java.time.LocalDateTime;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<ApiResponse<?>> health() {
        return ResponseEntity.ok(ApiResponse.ok(
            new HealthStatus("UP", LocalDateTime.now())
        ));
    }

    record HealthStatus(String status, LocalDateTime timestamp) {}
}
