/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Controller.java to edit this template
 */
package com.portifolio.portifolio.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.portifolio.portifolio.models.ContaModel;
import com.portifolio.portifolio.repositories.ContaModelRepository;

/**
 *
 * @author Daniel
 */
@RestController
public class IndexController {

    @Autowired
    public ContaModelRepository modelRepository;

    @GetMapping("/listar/user")
    public java.util.List<ContaModel> getAllConta() {
        return modelRepository.findAll();
    }

    @PostMapping("/save")
    public ModelAndView salvarContato(ContaModel contaModel) {
        modelRepository.save(contaModel);
        ModelAndView mv = new ModelAndView("index");
        System.out.println("Contato Salvo");
        return mv;

    }

}
