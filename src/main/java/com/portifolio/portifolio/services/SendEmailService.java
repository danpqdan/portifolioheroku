package com.portifolio.portifolio.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.portifolio.portifolio.enums.StatusEmailEnum;
import com.portifolio.portifolio.models.ContatoModel;
import com.portifolio.portifolio.repositories.ContatoRepository;

@Service
public class SendEmailService {

    @Autowired
    ContatoRepository contatoRepository;

    @Autowired
    JavaMailSender emailSender;

    public ContatoModel sendEmail(ContatoModel contatoModel) {
        contatoModel.setSendDateEmail(LocalDateTime.now());

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(contatoModel.getEmailFrom());
            message.setTo(contatoModel.getEmailTo());
            message.setSubject(contatoModel.getSubject());
            message.setText(contatoModel.getText());
            emailSender.send(message);
            contatoModel.setStatusEmail(StatusEmailEnum.SENT);
        } catch (MailException e) {
            contatoModel.setStatusEmail(StatusEmailEnum.ERROR);
        } finally {
            return contatoRepository.save(contatoModel);
        }

    }

}
