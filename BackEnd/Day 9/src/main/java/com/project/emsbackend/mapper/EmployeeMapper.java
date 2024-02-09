package com.project.emsbackend.mapper;

import com.project.emsbackend.dto.EmployeeDto;
import com.project.emsbackend.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto maptoEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail());
    }

    public static Employee maptoEmployee(EmployeeDto employeedto) {
        return new Employee(
                employeedto.getId(),
                employeedto.getFirstName(),
                employeedto.getLastName(),
                employeedto.getEmail());
    }

}
