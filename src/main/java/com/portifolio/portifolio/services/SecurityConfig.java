// package com.portifolio.portifolio.services;

// import
// org.springframework.security.access.expression.SecurityExpressionHandler;
// import
// org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import
// org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
// import
// org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.crypto.factory.PasswordEncoderFactories;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.FilterInvocation;
// import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

// import lombok.extern.log4j.Log4j2;

// @EnableWebSecurity
// @Log4j2
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

// @Override
// protected void configure(HttpSecurity http) throws Exception {
// http.csrf().disable()
// // .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
// .authorizeRequests()
// .anyRequest()
// .authenticated()
// .and()
// .httpBasic();
// }

// @Override
// protected void configure(AuthenticationManagerBuilder auth) throws Exception
// {
// PasswordEncoder passwordEncoder =
// PasswordEncoderFactories.createDelegatingPasswordEncoder();
// log.info("Password Encoded{}", passwordEncoder.encode("test"));
// auth.inMemoryAuthentication().withUser("Daniel")
// .password(passwordEncoder.encode("123456"))
// .roles("USER", "ADMIN");

// auth.inMemoryAuthentication().withUser("Fernanda")
// .password(passwordEncoder.encode("123456"))
// .roles("USER");

//

// }
