package com.lc;

		import org.mybatis.spring.annotation.MapperScan;
		import org.springframework.boot.SpringApplication;
		import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = {"com.lc.web.login.dao","com.lc.web.resource.dao"})
public class BjGreenbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(BjGreenbootApplication.class, args);
	}
}
