package com.PromRuleWizard.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
//	@Bean
//    public WebMvcConfigurer corsConfigurer()
//	{
//		return new WebMvcConfigurer()
//		{
//			@Override
//			public void addCorsMappings(CorsRegistry registry)
//			{
//				registry.addMapping("/forwards").allowedOrigins("*");
//			}
//		};
//	}

}
