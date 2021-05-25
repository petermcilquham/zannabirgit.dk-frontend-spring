package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //  spring security password
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    //  mere sikkerheds halløj - er måske nødvendigt, har ikke tjekket
    @Override
    public void configure(WebSecurity web){
        web
                .ignoring()
                .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/productShop/**", "/images/**", "/icon/**", "/images/**", "/calendar-imports/**", "/fragments/**");
    }

    //  vigtig sikkerhed
    //  her der sættes beskyttelse på de sider der skal beskyttes
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.headers().frameOptions().sameOrigin();
        http.headers().contentTypeOptions().disable();
        http.csrf().disable();
        http
                .authorizeRequests()
                .antMatchers("/webjars/**", "/resources/**").permitAll() //webjars og resources skal være der
                .antMatchers("/").permitAll() //permitAll() kan udskiftes med andre roller
                .antMatchers("/efterbehandling.html").permitAll()
                .antMatchers("/erfaringer.html").permitAll()
                .antMatchers("/priser.html").permitAll()
                .antMatchers("/kontakt.html").permitAll()
                .antMatchers("/onlinebooking.html").permitAll()
                .antMatchers("/zoneterapi.html").permitAll()
                .antMatchers("/healing.html").permitAll()
                .antMatchers("/accessbars.html").permitAll()
                .antMatchers("/products.html").permitAll()
                .antMatchers("/fragments/images.html").permitAll()
                .antMatchers("/fragments/menu.html").permitAll()
                .antMatchers("/fragments/footer.html").permitAll()
                .antMatchers("/fragments/ownerMenu.html").permitAll()
                .antMatchers("/calendar").hasAuthority("ADMIN")
                .antMatchers("/editProducts").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT).permitAll()
                .antMatchers(HttpMethod.POST).permitAll()
                .antMatchers(HttpMethod.DELETE).permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin( )
                    .defaultSuccessUrl("/calendar", true)
//              .loginPage("/calendar") //hvis man vil have sin egen login side
                .and()
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/index")
                        .invalidateHttpSession(true)
                )
                .httpBasic()
                .and()
                .cors().and().
                csrf().disable();
    }
}

