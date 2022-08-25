/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portifolio.portifolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portifolio.portifolio.models.ContaModel;

/**
 *
 * @author Daniel
 */
@Repository
public interface ContaModelRepository extends JpaRepository<ContaModel, Long> {

}
