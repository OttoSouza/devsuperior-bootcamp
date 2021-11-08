package com.otto.dsvendas.services;

import com.otto.dsvendas.dto.SaleDTO;
import com.otto.dsvendas.dto.SaleSuccessDTO;
import com.otto.dsvendas.dto.SaleSumDTO;
import com.otto.dsvendas.entities.Sale;
import com.otto.dsvendas.repositories.SaleRepository;
import com.otto.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();
        Page<Sale> result = saleRepository.findAll(pageable);
        return result.map(item -> new SaleDTO(item));
    }
    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller() {
       return saleRepository.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller() {
        return saleRepository.successGroupedBySeller();
    }
}
