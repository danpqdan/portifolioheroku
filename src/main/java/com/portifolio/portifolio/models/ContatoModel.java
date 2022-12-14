package com.portifolio.portifolio.models;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.portifolio.portifolio.enums.StatusEmailEnum;

import lombok.Data;

@Data
@Table(name = "TB_CONTATO")
@Entity
public class ContatoModel implements Serializable {

    @Id
    // @GeneratedValue(generator = "increment")
    // @GenericGenerator(name = "increment", strategy = "increment")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    String tel;
    String url;
    String textCli;

    private String ownerRef;
    private String emailFrom;
    private String emailTo;
    private String subject;
    @Column(columnDefinition = "TEXT")
    private String text;

    private LocalDateTime sendDateEmail;
    private StatusEmailEnum statusEmail;

}
