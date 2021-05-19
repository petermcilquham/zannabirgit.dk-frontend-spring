package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web){
        web
                .ignoring()
                .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**", "/icon/**", "/images/**");
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.headers().frameOptions().sameOrigin();
        http.headers().contentTypeOptions().disable();
        http.csrf().disable();
        http
                .authorizeRequests()
                .antMatchers("/webjars/**", "/resources/**").permitAll() //webjars og resources skal være der
                .antMatchers("/").permitAll() //permitAll() kan udskiftes med andre roller
                .antMatchers("/**").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
//               .loginPage("/") //kan give adgang til specifikke sider
                .and()
                .httpBasic()
                .and()
                .cors().and().
                csrf().disable();
    }
}

