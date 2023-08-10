package com.example.template1.service;

import com.example.template1.model.RegionCode;
import com.example.template1.model.VolunteerCode;
import com.example.template1.repository.RegionCodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegionCodeService {

    private final RegionCodeRepository regionCodeRepository;

    public RegionCode getCityList () {
        return regionCodeRepository.findByCityCodeAndDistrictCode();
    };
}