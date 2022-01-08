exports.compute = function(left, operator, right)
{
    let result = 0;

    right = parseInt(right, 10);
    left = parseInt(left, 10);

    if (operator == "+")
    {
        result = left + right;
    }
    else if (operator == "-")
    {
        result = left - right;
    }
    else if (operator == "*")
    {
        result = left * right;
    }
    else if (operator == "/")
    {
        if (right != 0)
        {
            result = left / right;
        }
    }
    else
    {
        // redirect or return some error
    }

    return result;
};