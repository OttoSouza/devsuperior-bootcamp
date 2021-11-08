package com.otto.dsvendas.dto;

import com.otto.dsvendas.entities.Seller;

import java.io.Serializable;

public class SaleSuccessDTO implements Serializable {

    private String sellerName;
    private Long visited;
    private Long dead;

    public SaleSuccessDTO() {

    }

    public SaleSuccessDTO(Seller seller, Long visited, Long dead) {
        this.sellerName = seller.getName();
        this.visited = visited;
        this.dead = dead;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Long getVisited() {
        return visited;
    }

    public void setVisited(Long visited) {
        this.visited = visited;
    }

    public Long getDead() {
        return dead;
    }

    public void setDead(Long dead) {
        this.dead = dead;
    }
}
