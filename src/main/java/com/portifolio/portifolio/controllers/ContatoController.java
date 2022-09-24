package com.portifolio.portifolio.controllers;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.portifolio.portifolio.DTOs.ContatoDTO;
import com.portifolio.portifolio.models.ContatoModel;
import com.portifolio.portifolio.repositories.ContatoRepository;
import com.portifolio.portifolio.services.SendEmailService;

@RestController
public class ContatoController {

    @Autowired
    SendEmailService sendEmailService;

    @Autowired
    ContatoRepository contatoRepository;

    @PostMapping("/enviarEmail")
    public ModelAndView salvarContato(ContatoModel contatoModel) {
        contatoRepository.save(contatoModel);
        ContatoDTO contatoDTO = new ContatoDTO();
        BeanUtils.copyProperties(contatoModel, contatoDTO);
        sendEmailService.sendEmail(contatoModel);
        ModelAndView mv = new ModelAndView("index");
        System.out.println("Contato Salvo");
        return mv;
    }

    // @PostMapping("/enviarEmail")
    // public ResponseEntity<ContatoModel> enviandoEmail(@RequestBody @Valid
    // ContatoDTO contatoDTO) {
    // ContatoModel contatoModel = new ContatoModel();
    // return new ResponseEntity<>(contatoModel, HttpStatus.CREATED);
    // }

}
