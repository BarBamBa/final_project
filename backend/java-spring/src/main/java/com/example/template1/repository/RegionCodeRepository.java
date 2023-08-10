package com.example.template1.repository;

import com.example.template1.model.RegionCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegionCodeRepository extends JpaRepository<RegionCode, Integer> {

    RegionCode findByCityCodeAndDistrictCode(int cityCode, int districtCode);

//    List<RegionCode> findDistinctByCity(String city);

//    List<RegionCode> findDistinctBy();
}