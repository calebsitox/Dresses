package com.web.lajose.config.util;

import java.security.Key;
import java.util.Date;
import java.util.List;

import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private long expirationTime;

    private  Key getSigningKey() {
        return new SecretKeySpec(secret.getBytes(), SignatureAlgorithm.HS256.getJcaName());
    }


    public  String generateToken(String username, List<String> roles, String email) {
        return Jwts.builder()
                .setSubject(username) // usuario principal
                .claim("roles", roles) // lista de roles
                .claim("email", email) // correo
                .setIssuer("Lajose") // emisor del token
                .setAudience("MJ-WEB") // destinatario
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }


    public  String getUsernameFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
