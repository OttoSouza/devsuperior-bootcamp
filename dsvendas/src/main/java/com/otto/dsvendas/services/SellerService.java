package com.otto.dsvendas.services;

import com.otto.dsvendas.dto.SellerDTO;
import com.otto.dsvendas.entities.Seller;
import com.otto.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerDTO> findAll() {
        List<Seller> result = sellerRepository.findAll();
        return result.stream().map(item -> new SellerDTO((item))).collect(Collectors.toList());
    }
}
