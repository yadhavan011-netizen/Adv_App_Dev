package com.project.emsbackend.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.project.emsbackend.dto.EmployeeDto;
import com.project.emsbackend.entity.Employee;
import com.project.emsbackend.exception.ResourceNotFoundException;
import com.project.emsbackend.mapper.EmployeeMapper;
import com.project.emsbackend.repository.EmployeeRepository;
import com.project.emsbackend.service.EmployeeService;

import lombok.AllArgsConstructor;

@SuppressWarnings("unused")
@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeedto) {

        Employee employee = EmployeeMapper.maptoEmployee(employeedto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + employeeId));

        return EmployeeMapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        List<EmployeeDto> employeeDtos = new ArrayList<>();
        for (Employee employee : employees) {
            employeeDtos.add(EmployeeMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }

}
