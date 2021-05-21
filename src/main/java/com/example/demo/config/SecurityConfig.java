package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Qualifier("customUserDetailsService")
    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    AuthenticationProvider authenticationProvider () {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder());
        return provider;
    }

    @Override
    public void configure(WebSecurity web) {
        web
                .ignoring()
                .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/productShop/**", "/images/**", "/icon/**", "/images/**", "/calendar-imports/**", "/fragments/**");
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
//                .antMatchers("/onlinebooking.html").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT).permitAll()
                .antMatchers(HttpMethod.POST).permitAll()
                .antMatchers(HttpMethod.DELETE).permitAll()
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

