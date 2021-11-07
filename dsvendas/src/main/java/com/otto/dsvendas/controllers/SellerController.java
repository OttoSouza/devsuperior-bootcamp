package com.otto.dsvendas.controllers;

import com.otto.dsvendas.dto.SellerDTO;
import com.otto.dsvendas.services.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<SellerDTO>> findALl() {
        List<SellerDTO> list = sellerService.findAll();
        return ResponseEntity.ok().body(list);
    }
}
